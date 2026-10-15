// Renders content-list bullets. Wrap a phrase in **double asterisks** to bold it.
function withBold(line: string) {
    return line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
            ? <strong key={i} className="font-helveticabold font-normal text-white">{part.slice(2, -2)}</strong>
            : part
    )
}

export default function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="list-disc pl-4 space-y-1 text-left">
            {items.map((item, i) => <li key={i}>{withBold(item)}</li>)}
        </ul>
    )
}
