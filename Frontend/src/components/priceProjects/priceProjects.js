import './priceProjects.scss';

const PriceProjects = ({title, body}) => {
    return <>
        <div className='firstBlock'>
            <div className="innerBlock">
                <div className="block"></div>
                <p className='title'>{title}</p>
                <p className='body'><b>{body}</b></p>
            </div>
        </div>
    </>
};

export default PriceProjects;