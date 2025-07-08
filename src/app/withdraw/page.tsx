export default function WithdrawPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Withdraw Page</h1>
            <p className="text-gray-700 mb-6">This is where you can withdraw your funds.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Withdraw Funds
            </button>
        </div>
    );
}