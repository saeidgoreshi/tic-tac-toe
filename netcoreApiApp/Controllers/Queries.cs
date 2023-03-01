
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
    public class Queries
    {
        
        readonly ITicTacToeService _TicTacToeService;
     
        public Queries([Service(ServiceKind.Synchronized)] ITicTacToeService TicTacToeService) 
        {
            _TicTacToeService = TicTacToeService;
        }
      

      public async Task<List<TicTacToe>> TicTacToes()
        {
            List<TicTacToe> TicTacToes = null;
            try
            {
                TicTacToes = await _TicTacToeService.TicTacToes((int?)null);

            }
            catch (Exception e)
            {
            }

            return TicTacToes;
        }
    }
   
}
