import React from "react";
import { cn } from "../utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  withHeader?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
  mainAction?: React.ReactNode;
}
const Card: React.FunctionComponent<CardProps> = ({
  children,
  withHeader,
  title,
  subtitle,
  description,
  mainAction,
  className,
  ...props
}) => {
  if (!withHeader) {
    return (
      <div
        className={cn(
          "card-container p-6  rounded-xl border border-neutral-100 shadow-lg bg-white shadow-lg shadow-neutral-100",
        )}
        {...props}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <div
          className={cn(
            "card-container   rounded-xl border border-neutral-100 shadow-lg bg-white shadow-lg shadow-neutral-100",
            className,
          )}
          {...props}
        >
          <div className="card-header-separator  border-b">
            <div className="card-header p-6 flex flex-row  items-center justify-between max-sm:w-full max-sm:flex-col max-sm:items-stretch max-sm:gap-4">
              <div>
                {title && (
                  <h1 className="text-xl font-semibold -tracking-tighter">
                    {title}
                  </h1>
                )}
                {description && (
                  <p className="text-sm text-neutral-500 -tracking-tight">
                    {description}
                  </p>
                )}
              </div>
              {mainAction && <div>{mainAction}</div>}
            </div>
          </div>
          <div className="card-body p-6 ">{children}</div>
        </div>
      </div>
    );
  }
};

export { Card };
