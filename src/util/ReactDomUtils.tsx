import React from 'react';
import ReactDOM from 'react-dom/client';

export class ReactDomUtils {
  static render(children: React.ReactElement, container?: HTMLElement) {
    const div = document.createElement('div');
    const body = container || document.body;
    body.appendChild(div);

    const root = ReactDOM.createRoot(div as HTMLElement);

    function destroy() {
      setTimeout(() => root.unmount());
      if (div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }
    root.render(
      React.cloneElement(children as React.ReactElement, {
        ...children!.props,
        onDestroy: destroy,
      }),
    );
  }
}
