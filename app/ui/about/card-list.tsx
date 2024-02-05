interface CardListProps {
    list: string[];
}

export default function CardList({ list }: CardListProps) {
    return (
        <div>
            <ul className="list-disc mx-4">
                {list.map((item, index) => (
                    <li
                        key={index}
                        title={item}
                        className="border-solid border-t-2 dark:border-slate-300 border-slate-800 last:border-y-2 "
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
