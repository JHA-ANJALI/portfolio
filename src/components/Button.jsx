import React from 'react';

export  function ButtonPrimary({ href, target = '_self', label, icon, classes = '' }) {
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-primary ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        );
    }
}



export function ButtonOutline({ href, target = '_self', label, icon, classes = '' }) {
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-outline ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </button>
        );
    }
}