import { SiNextdotjs, SiMdx, SiNeo4J } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export default function Skill() {
    return (
        <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="md:w-full sm:w-96 w-60 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
            <ul className="flex [&_li]:mx-8 md:justify-start max-w-none animate-infinite-scroll">
                <li>
                    <SiNextdotjs className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <SiMdx className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <SiNeo4J className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <TbBrandTailwind className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <FaReact className="md:text-6xl text-4xl" />
                </li>
            </ul>
            <ul
                className="flex [&_li]:mx-8 md:justify-start max-w-none animate-infinite-scroll"
                aria-hidden="true"
            >
                <li>
                    <SiNextdotjs className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <SiMdx className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <SiNeo4J className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <TbBrandTailwind className="md:text-6xl text-4xl" />
                </li>
                <li>
                    <FaReact className="md:text-6xl text-4xl" />
                </li>
            </ul>
        </div>
    );
}
