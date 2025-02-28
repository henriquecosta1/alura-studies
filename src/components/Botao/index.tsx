import React from "react"
import style from './Botao.module.scss'

type BotaoProps = {
    type?: "button" | "submit" | "reset"
} & React.PropsWithChildren<{}>;

class Botao extends React.Component<BotaoProps> {   
    static defaultProps: Partial<BotaoProps> = {
        type: "button"
    };

    render() {
        const { type, children } = this.props;
        return (
            <button type={type} className={style.botao}>
                {children}
            </button>
        )
    }
}

export default Botao;