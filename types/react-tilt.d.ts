declare module 'react-tilt' {

    interface PropsTilt {
        options?: {
            reverse?: boolean = true,
            max?: number = 35,
            perspective?: number = 1000,
            scale?: number = 1,
            speed?: number = 300,
            transition?: boolean = true,
            axis?: string = null,
            reset?: boolean = true,
            easing?: string = "cubic-bezier(.03,.98,.52,.99)"
        } | undefined,
        style?: React.CSSProperties | undefined
    }

    const Tilt: React.FC<PropsTilt> = () => {};

    export default Tilt;
}