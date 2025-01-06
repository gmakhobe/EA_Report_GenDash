//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
double OnTester(void)
  {

   return fileProcess();
  }

//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
double fileProcess()
  {
   double _statsSuccess = 1.0;
   double _statusError = 0.0;

   string fileLocation = "testfile.txt";

   int fileHandle = FileOpen(fileLocation, FILE_READ|FILE_WRITE|FILE_ANSI);

   if (fileHandle == INVALID_HANDLE)
   {
      Print("Failed to open or create a file._____________");
      return (_statusError);
   }

   FileWriteString(fileHandle, "Hello World\r\n");
   //FileWriteString(fileHandle, "Hello World 2332\0");
   FileClose(fileHandle);
   Print("File successfully created._____________");
   historyData();
   return(_statsSuccess);
  }

//+------------------------------------------------------------------+
//|                                                                  |
//+------------------------------------------------------------------+
void historyData()
  {
   datetime _fromDate = D'01.01.2022';
   datetime _toDate = D'12.31.2022';
   bool _isHostoryOrdersSelected = HistorySelect(_fromDate, _toDate);
   int _historyDeals = HistoryDealsTotal();
   int _historyOrders = HistoryOrdersTotal();
   
   
   string fileContents = "{\"data\": [\n";

   Print("History Information Selected = ", _isHostoryOrdersSelected);
   Print("=============================================");
   Print("Available Total Orders____ = ", _historyOrders);
   Print("=============================================");

   for(int counter = 0; counter < _historyOrders; counter++)
     {
      ulong _ticket = HistoryOrderGetTicket(counter);
      
      Print("______________________ Ticket = " + IntegerToString(_ticket) + "______________________");
      
      string _symbol = HistoryOrderGetString(_ticket,ORDER_SYMBOL);
      string _type = (HistoryOrderGetInteger(_ticket, ORDER_TYPE) == ORDER_TYPE_BUY) ? "Buy": ((HistoryOrderGetInteger(_ticket, ORDER_TYPE) == ORDER_TYPE_SELL) ? "Sell" : "None");
      double _volume = HistoryOrderGetDouble(_ticket,ORDER_VOLUME_INITIAL);
      double _entryPrice = HistoryOrderGetDouble(_ticket,ORDER_PRICE_OPEN);
      double _stopLoss = HistoryOrderGetDouble(_ticket, ORDER_SL);
      double _takeProfit = HistoryOrderGetDouble(_ticket, ORDER_TP);
      string _comment = HistoryOrderGetString(_ticket, ORDER_COMMENT);
      datetime _time = HistoryOrderGetInteger(_ticket, ORDER_TIME_DONE);
      
      fileContents += "  {\r\n";
      fileContents += "     \"Symbol\": \"" + _symbol + "\",\n";
      fileContents += "     \"Type\": \"" + _type + "\",\n";
      fileContents += "     \"Volume\": \"" + _volume + "\",\n";
      fileContents += "     \"EntryPrice\": \"" + _entryPrice + "\",\n";
      fileContents += "     \"StopLossPrice\": \"" + _stopLoss + "\",\n";
      fileContents += "     \"TakeProfitPrice\": \"" + _takeProfit + "\",\n";
      fileContents += "     \"Comment\": \"" + _comment + "\",\n";
      fileContents += "     \"Time\": \"" + _time + "\",\n";
      fileContents += "  },\n";

     }
     fileContents += "]}\r\n";
     
     string fileLocation = "orders.txt";
     int fileHandle = FileOpen(fileLocation, FILE_READ|FILE_WRITE|FILE_ANSI);
     FileWriteString(fileHandle, fileContents);
     FileClose(fileHandle);
     
     fileContents = "{\"data\": [\n";
   
   Print("=============================================");
   Print("Available Total Deals____ = ", _historyDeals);
   Print("=============================================");

   for(int counter = 0; counter < _historyDeals; counter++)
     {
      ulong _ticket = HistoryDealGetTicket(counter);
      
      Print("______________________ Ticket = " + IntegerToString(_ticket) + "______________________");
      
      if(!HistoryDealGetTicket((int)_ticket))
        {
         Print("History Order - Failed to get History Order = , ", counter);
         //continue;
        }

      ulong _order = HistoryDealGetInteger(_ticket, DEAL_ORDER);
      string _symbol = HistoryDealGetString(_ticket, DEAL_SYMBOL);
      string _type = (HistoryDealGetInteger(_ticket, DEAL_TYPE) == DEAL_TYPE_BUY ? "Buy": (HistoryDealGetInteger(_ticket, DEAL_TYPE) == DEAL_TYPE_SELL ? "Sell" : "None"));
      double _volume = HistoryDealGetDouble(_ticket, DEAL_VOLUME);
      double _entryPrice = HistoryDealGetDouble(_ticket, DEAL_PRICE);
      double _stopLoss = HistoryDealGetDouble(_ticket, DEAL_SL);
      double _takeProfit = HistoryDealGetDouble(_ticket, DEAL_PROFIT);
      double _profit = HistoryDealGetDouble(_ticket, DEAL_PROFIT);
      string _comment = HistoryDealGetString(_ticket, DEAL_COMMENT);
   
      fileContents += "  {\n";
      fileContents += "     \"Order\": \"" + _order + "\",\n";
      fileContents += "     \"Symbol\": \"" + _symbol + "\",\n";
      fileContents += "     \"Type\": \"" + _type + "\",\n";
      fileContents += "     \"Volume\": \"" + _volume + "\",\n";
      fileContents += "     \"EntryPrice\": \"" + _entryPrice + "\",\n";
      fileContents += "     \"StopLossPrice\": \"" + _stopLoss + "\",\n";
      fileContents += "     \"TakeProfitPrice\": \"" + _takeProfit + "\",\n";
      fileContents += "     \"Profit\": \"" + _profit + "\",\n";
      fileContents += "     \"Comment\": \"" + _comment + "\",\n";
      fileContents += "  },\n";

     }
     
     string fileLocation2 = "deals.txt";
     int fileHandle2 = FileOpen(fileLocation2, FILE_WRITE);
     fileContents += "]}\r\n";
     FileWriteString(fileHandle2, fileContents);
     FileClose(fileHandle2);
     
     PrintFormat("Error when receiving indicator handle. Error code = %d",GetLastError());
  }
//+------------------------------------------------------------------+