interface MusicCardProps {
    music: {
        link: string;
    }[];
}

export default function MusicCard({ music }: MusicCardProps) {
    return (
        <div className="rounded-md">
            <div>
                <iframe
                    src="https://open.spotify.com/embed/playlist/77LWCafwHceCZfO7YijKJg?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
