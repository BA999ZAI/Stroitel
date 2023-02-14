import './fullInformation.scss';

const FullInformation = ({text}) => {
    return <>
        <div className="osnBlock">
            <div className="blockText">
                <p className="text">{text}</p>
            </div>
        </div>
    </>
};

export default FullInformation;