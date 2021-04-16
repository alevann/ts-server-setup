declare type Optional<T> = T | null | undefined

interface Array<T> {
    first: Optional<T>
    last : Optional<T>
    remove(e: T): Optional<T>
}
