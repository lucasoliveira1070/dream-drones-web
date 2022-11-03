import { ReactNode } from "react";
import "./Divider.css";

interface Props {
    children?: ReactNode
    // any props that come into the component
}
const Divider = ({ children, ...props }: Props) => {
    return (
        <div className="container">
            <div className="border" />
            <span className="content">
                {children}
            </span>
            <div className="border" />
        </div>
    );
};

export default Divider;