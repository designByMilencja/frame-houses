
const ContactInfo = ({title, infos}) => (
    <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {infos.map(info => <li key={info} className="p-2">{info}</li>)}
        </ul>
    </div>
)
export default ContactInfo
