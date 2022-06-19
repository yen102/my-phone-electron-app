import { Button } from "antd";
import classNames from "classnames";

export default function AppButton({ type, className, onClick, children }) {
    return (
        <Button className={classNames('button', `button--${type}`, className)} onClick={onClick}>
            {children}
        </Button>
    )
}