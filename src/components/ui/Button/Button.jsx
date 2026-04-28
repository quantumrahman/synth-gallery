const Button = ({ 
    children,
    variant = "primary",
    size = "md",
    className = "",
}) => {

    const basedStyle = "w-fit inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer active:scale-[0.97] rounded-lg";

    const variantStyle = {
        primary: "bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:brightness-110",
        secondary: "bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-900",
        outline: "border border-zinc-600 bg-transparent text-white hover:bg-zinc-900",
        ghost: "text-zinc-400 hover:bg-zinc-800 hover:text-whit"
    };

    const sizesStyle = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10 p-2",
    };

    const buttonStyleClasses = [
        basedStyle, variantStyle[variant] || variantStyle.primary, sizesStyle[size] || sizesStyle.md, 
    ].join(' ');

    return (
        <button className={buttonStyleClasses}>{ children }</button>
    );
};

export default Button;
