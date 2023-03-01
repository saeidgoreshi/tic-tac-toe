using netcoreApiApp.Models;

namespace netcoreApiApp.Services
{
    public interface ITicTacToeService
    {
        Task<List<TicTacToe>> TicTacToes(int? Id);
        Task<TicTacToe> archiveTicTacToe(TicTacToe _TicTacToe);
    }
}
