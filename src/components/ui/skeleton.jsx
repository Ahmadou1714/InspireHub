import { cn } from "../../lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md",
        className
      )}
      style={{
        background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s linear infinite',
      }}
      {...props}
    />
  )
}

export { Skeleton }
