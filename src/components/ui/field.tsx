"use client";

import { cn } from "@/lib/utils";
import { Field as FieldPrimitive } from "@base-ui-components/react/field";

function Field({ className, ...props }: FieldPrimitive.Root.Props) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex flex-col items-start gap-2 pt-3", className)}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn("inline-flex items-center gap-2 text-sm/4", className)}
      {...props}
    />
  );
}

function FieldControl({
  className,
  size = "default",
  ...props
}: Omit<FieldPrimitive.Control.Props, "size"> & {
  size?: "sm" | "default" | "lg" | number;
}) {
  if (props.render) {
    return <FieldPrimitive.Control data-slot="field-control" {...props} />;
  }

  return (
    <span
      data-slot="field-control"
      className={cn(
        "relative inline-flex w-full rounded-lg border border-input bg-background bg-clip-padding text-base/5 ring-ring transition-[color,background-color,box-shadow,border-color] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-sm has-focus-visible:border-ring has-focus-visible:ring-[1px] has-disabled:opacity-64 has-disabled:before:shadow-none has-aria-invalid:border-[oklch(0.577_0.245_27.325)] has-aria-invalid:before:shadow-none has-focus-visible:has-aria-invalid:border-[oklch(0.704_0.191_22.216)] has-focus-visible:has-aria-invalid:ring-[oklch(0.704_0.191_22.216)] sm:text-sm dark:bg-[oklch(0.20_0.005_52)] dark:bg-clip-border dark:before:hidden dark:has-aria-invalid:ring-[oklch(0.704_0.191_22.216)]",
        className
      )}
    >
      <FieldPrimitive.Control
        data-slot="field-control"
        className={cn(
          "w-full min-w-0 rounded-[inherit] px-[calc(--spacing(3)-1px)] py-[calc(--spacing(3)-1px)] outline-none placeholder:text-muted-foreground",
          size === "sm" &&
            "px-[calc(--spacing(2.5)-1px)] py-[calc(--spacing(1)-1px)]",
          size === "lg" && "py-[calc(--spacing(2)-1px)]",
          props.type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          props.type === "file" &&
            "text-muted-foreground file:me-3 file:bg-transparent file:text-sm file:font-medium file:text-foreground"
        )}
        {...props}
      />
    </span>
  );
}

function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-xs text-destructive-foreground", className)}
      {...props}
    />
  );
}

const FieldValidity = FieldPrimitive.Validity;

export {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldValidity,
};
