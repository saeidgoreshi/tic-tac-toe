using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using netcoreApiApp.Controllers;
using netcoreApiApp.Models;
using netcoreApiApp.Repositories;

namespace netcoreApiApp.Services
{
    public class TicTacToeRepository : ITicTacToeRepository
    {
        private readonly ILogger<TicTacToeRepository> _logger;
        readonly TictactoeContext _context;

        public TicTacToeRepository(ILogger<TicTacToeRepository> logger
           , TictactoeContext context)
        {
            _context = context;
            _logger = logger;
            
        }

        public async Task<TicTacToe> archiveTicTacToe(TicTacToe _TicTacToe)
        {
            _context.TicTacToes.Add(_TicTacToe);
             await _context.SaveChangesAsync();
            return _TicTacToe;
        }

        public async Task<List<TicTacToe>> TicTacToes(int? id)
        {
            List<TicTacToe> TicTacToes = null;
            try
            {
                if (id == null)
                {
                    TicTacToes = await _context.TicTacToes.ToListAsync();
                    return TicTacToes;
                }

                var TicTacToe = await _context.TicTacToes.FindAsync(id);

                if (TicTacToe == null)
                {
                    _logger.Log(LogLevel.Warning, "Book Not found");
                    return null;
                }

                return new List<TicTacToe> { TicTacToe };

            }
            catch (Exception ex) { _logger.Log(LogLevel.Error,ex.Message); return TicTacToes; }
            
        }
    }
}
