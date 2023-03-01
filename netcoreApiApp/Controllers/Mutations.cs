
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Identity.Client;
using netcoreApiApp.Models;
using netcoreApiApp.Repositories;
using netcoreApiApp.Services;

namespace netcoreApiApp.Controllers
{
    public class Mutations
    {
        
        
        readonly ITicTacToeService _TicTacToeService;

        public Mutations([Service(ServiceKind.Synchronized)] ITicTacToeService TicTacToeService)
        {
            _TicTacToeService = TicTacToeService;
        }
     
        public async Task<TicTacToe> archiveTicTacToe(string playBoard)
        {
            var _TicTacToe = new TicTacToe();
            try
            {
                _TicTacToe = await _TicTacToeService.archiveTicTacToe(new TicTacToe { PlayBoard= playBoard });

            }
            catch (Exception e)
            {
            }

            return _TicTacToe;
        }
    }
}
