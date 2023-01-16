export default function PageTitle({title}) {
    return (
        <h1 className='text-gradient-v1 font-extrabold text-4xl'>
            {title}
            <div className="divider"></div>
        </h1>
    );
}