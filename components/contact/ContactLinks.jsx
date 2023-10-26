import Link from "next/link";

const ContactLinks = ({title, links}) => (
    <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map(link =>
                (<li key={link.text}><Link href={link.href} className="hover:text-contact rounded-[15px] px-3 py-1">{link.text}</Link></li>))}
        </ul>
    </div>
)
export default ContactLinks
