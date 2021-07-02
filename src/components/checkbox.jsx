import React from "react";

const Checkbox = props => {
    let { radio, onChange } = props;

    if (radio === "Beach") {
        return <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Goa" onChange={(e) => onChange(e.target)} />
                <label className="form-check-label" for="flexCheckDefault">
                    Goa
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Pondicherry" onChange={(e) => onChange(e.target)} />
                <label className="form-check-label" for="flexCheckDefault">
                    Pondicherry
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Kerala" onChange={(e) => onChange(e.target)} />
                <label className="form-check-label" for="flexCheckDefault">
                    Kerala
                </label>
            </div>
        </div>;
    } else {
        return <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="shimla" onChange={(e) => onChange(e.target)} />
                <label className="form-check-label" for="flexCheckDefault">
                    Shimla
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="manali" onChange={(e) => onChange(e.target)} />
                <label className="form-check-label" for="flexCheckDefault">
                    Manali
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="nainital" onChange={(e) => onChange(e.target)} />
                <label className="form-check-label" for="flexCheckDefault">
                    Nainital
                </label>
            </div>
        </div>;
    }
};

export default Checkbox;