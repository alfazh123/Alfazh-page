interface MusicCardProps {
    music: {
        link: string;
    }[];
}

export default function MusicCard({ music }: MusicCardProps) {
    return (
        <div className="rounded-md">
            <ul className="snap-y snap-mandatory overflow-y-auto h-40 [&_li]:my-4">
                {music.map((item, index) => (
                    <li className="snap-center flex" key={index}>
                        <iframe
                            src={item.link}
                            width="100%"
                            height="152"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    );
}
