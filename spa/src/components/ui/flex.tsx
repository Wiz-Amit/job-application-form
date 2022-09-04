type FlexProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

function Flex({ children, className = "", ...props }: FlexProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Flex;
