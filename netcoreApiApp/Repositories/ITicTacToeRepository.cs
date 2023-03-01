using netcoreApiApp.Models;

namespace netcoreApiApp.Repositories
{
    public interface ITicTacToeRepository
    {
        Task<List<TicTacToe>> TicTacToes(int? Id);
        Task<TicTacToe> archiveTicTacToe(TicTacToe _TicTacToe);
    }
}
