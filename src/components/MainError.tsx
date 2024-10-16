const MainError = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-indigo-500 bg-fixed bg-cover bg-bottom error-bg"
      style={{
        backgroundImage: `url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="row flex flex-col items-center">
          <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-32 md:-mt-52 flex flex-col">
            <div className="relative">
              <h1 className="relative text-4xl sm:text-5xl tracking-tighter text-shadow font-sans font-bold">
                <span className="px-2">Something</span>
                <span className="px-2">Went</span>
                <span className="px-2">Wrong!</span>
              </h1>
            </div>

            <p className="text-gray-100 mt-2 mb-6 text-lg sm:text-xl">
              Try refreshing the page!
            </p>
            <div
              onClick={(e) => {
                window.location.reload();
              }}
              className="bg-green-500 hover:bg-green-600 active:bg-green-700 transition-all duration-200 ease-in-out px-6 py-4 text-sm sm:text-base shadow-md font-medium tracking-wider text-gray-50 rounded-lg hover:shadow-lg  "
            >
              Refresh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainError;
