# ImageUpload 图片上传

单图上传。未传 `uploadRequest` 时使用本地预览；传入后由业务完成上传并返回 `{ url }`。

## 基础用法

<code src="./demo/base.tsx"></code>

## 尺寸

通过 `width` / `height` 控制展示区域。

<code src="./demo/size.tsx"></code>

## 只读

`readOnly` 只展示图片。`preview={false}` 关闭预览，`uploadTip` 自定义空态文案。

<code src="./demo/readonly.tsx"></code>

## 类型与大小限制

`accept` 限制可选类型，`limitSize` 单位为字节。

<code src="./demo/limit.tsx"></code>

## 自定义上传

<code src="./demo/request.tsx"></code>

## 表单中使用

<code src="./demo/form.tsx"></code>

<API id="ImageUpload"></API>
