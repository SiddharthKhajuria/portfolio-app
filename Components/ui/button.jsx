import React from "react";

const variantClasses = {
  default: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
};

export function Button({
  className = "",
  variant = "default",
  type = "button",
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant] || variantClasses.default} ${className}`;

  return <button type={type} className={classes} {...props} />;
}
