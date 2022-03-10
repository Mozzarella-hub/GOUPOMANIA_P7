
import Log from "../components/Log";
import { UidContext } from '../components/AppContext';
import { useContext } from 'react';

const Profil = () => {
    const uid = useContext(UidContext);

    return (
    <div className="profil-page">
        {uid ? (
            <h1>PAGE UDATE</h1>
            ):(
        <div className="log-container">
            <Log signin={false} signup={true} />
            <div className=".img-container">
                {/* <img src="..\..\icon.svg" alt="img-log" /> */}
            </div>
        </div>
        )}
    </div>
    );
};

export default Profil;