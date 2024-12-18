import { Skeleton } from '../../../components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-7 mt-1 w-36" />
      <Skeleton className="h-4 w-52" />
    </>
  )
}
