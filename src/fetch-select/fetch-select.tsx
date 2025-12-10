import {isEmpty, concat, debounce} from 'lodash-es';
import React, {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';
import ExtSelect, {ExtSelectProps} from "../ext-select";
import {SessionStorageUtils} from "@trionesdev/antd-react-ext";


export type FetchSelectProps = {
    /**
     * @description 初始化值选项,用于列表等场景的时候，Select 组件可以展示，不需要去请求选项
     * @default
     */
    initialValueOptions?: any[];
    /**
     * @description 固定选项
     * @default
     */
    fixedOptions?: any[];
    /**
     * @description 是否下拉的时候请求数据
     * @default false
     */
    dropdownFetch?: boolean;
    /**
     * @description 是否允许请求
     * @default true
     */
    fetchEnable?: boolean;
    /**
     * @description 是否每次都请求数据，默认只请求一次
     * @default false
     */
    fetchAlways?: boolean;
    fetchRequest?: (searchValue?: string) => Promise<any>;
    defaultRender?: React.ReactNode;
    cacheKey?: string;
    cacheExpire?: number;
} & Omit<ExtSelectProps, 'options' | 'onDropdownVisibleChange'>;
export const FetchSelect: FC<FetchSelectProps> = memo(({
                                                           initialValueOptions = [],
                                                           fixedOptions,
                                                           dropdownFetch = false,
                                                           fetchEnable = true,
                                                           fetchAlways = false,
                                                           fetchRequest,
                                                           defaultRender,
                                                           cacheKey,
                                                           cacheExpire = 0,
                                                           ...props
                                                       }) => {
    const [fetched, setFetched] = useState(false);
    const [fetchedOptions, setFetchedOptions] = useState([])

    const options = useMemo(() => {
        if (isEmpty(fetchedOptions)) {
            return concat([], fixedOptions || [], initialValueOptions || [])
        } else {
            return concat([], fixedOptions || [], fetchedOptions || [])
        }
    }, [fixedOptions, initialValueOptions, fetchedOptions])

    const handleQuery = useCallback(
        (searchValue?: string) => {
            const request =
                fetchRequest && fetchEnable
                    ? fetchRequest(searchValue)
                    : Promise.resolve([]);
            const data = SessionStorageUtils.getExpireItem(cacheKey, true);
            if (data) {
                setFetchedOptions(data || [])
                setFetched(true);
                return;
            }
            request
                .then((data: any) => {
                    setFetchedOptions(data || [])
                    SessionStorageUtils.setExpireItem(cacheKey, data, cacheExpire);
                })
                .finally(() => {
                    setFetched(true);
                });
        },
        [fetchRequest],
    );

    useEffect(() => {
        if (!dropdownFetch) {
            handleQuery();
        }
    }, []);

    return (
        <ExtSelect
            {...props}
            options={options}
            showSearch={{onSearch:(props.showSearch ? debounce(handleQuery, 500) : undefined)}}
            onOpenChange={(open: boolean) => {
                if (open && dropdownFetch && fetchEnable && (fetchAlways || !fetched)) {
                    handleQuery();
                }
                props.onOpenChange?.(open);
            }}
            defaultRender={defaultRender}
        />
    );
});
