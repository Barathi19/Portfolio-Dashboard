interface HeaderProps {
  lastUpdated?: string;
}

function Header({ lastUpdated }: HeaderProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-primary mx-auto p-4 gap-2">
      <h3 className="text-white font-semibold text-lg tracking-wide">
        PORTFOLIO
      </h3>
      {lastUpdated && (
        <p className="text-white text-xs sm:text-sm text-center sm:text-right">
          Last Updated At:{" "}
          <b className="font-semibold">{formatDate(lastUpdated)}</b>
        </p>
      )}
    </div>
  );
}

export default Header;
