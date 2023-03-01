using netcoreApiApp.Controllers;
using netcoreApiApp.Models;
using netcoreApiApp.Repositories;

namespace netcoreApiApp.Services
{
    public class TicTacToeService : ITicTacToeService
    {
        public readonly ITicTacToeRepository _TicTacToeRepository;
        private readonly ILogger<TicTacToeService> _logger;

        public TicTacToeService(ITicTacToeRepository TicTacToeRepository, ILogger<TicTacToeService> logger)
        {
            _logger = logger;
            _TicTacToeRepository = TicTacToeRepository;
        }

        public async Task<TicTacToe> archiveTicTacToe(TicTacToe _TicTacToe)
        {
            try
            {
                var TicTacToes = await _TicTacToeRepository.archiveTicTacToe(_TicTacToe);
                return TicTacToes;
            }
            catch (Exception ex) { _logger.Log(LogLevel.Error, ex.Message); return _TicTacToe; }
        }

        public async Task<List<TicTacToe>> TicTacToes(int? id)
        {
            List<TicTacToe> TicTacToes= null;
            try
            {
                TicTacToes = await _TicTacToeRepository.TicTacToes(id);
                return TicTacToes;
            }
            catch (Exception ex) { _logger.Log(LogLevel.Error, ex.Message); return TicTacToes; }
          
        }
    }
}
