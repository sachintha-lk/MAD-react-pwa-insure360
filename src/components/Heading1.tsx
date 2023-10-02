interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

function Heading1({ children, className }: Heading1Props) {
  return (
    <h1
      className={`
        mb-5
        mt-10
        bg-gradient-to-r
        from-blue-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent ${className} `}
    >
      {children}
    </h1>
  );
}

export default Heading1;
