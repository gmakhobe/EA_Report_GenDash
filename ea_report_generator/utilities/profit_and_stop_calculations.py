from decimal import Decimal


def get_take_profit_in_pips(trade_type, entry_price, take_profit_price):
    """
    Return the take profit in pips
    """

    if trade_type == "Buy":
        take_profit = take_profit_price - entry_price
        results = get_decimal_points(take_profit)

        if results >= 4:
            return take_profit * 10000

        if results == 3:
            return take_profit * 100

        if results == 2:
            return take_profit

    if trade_type == "Sell":
        take_profit = entry_price - take_profit_price
        results = get_decimal_points(take_profit)

        if results >= 4:
            return take_profit * 10000

        if results == 3:
            return take_profit * 100

        if results == 2:
            return take_profit

    return 0


def get_stop_loss_pips(trade_type, entry_price, stop_loss_price):
    """
    Return the stop loss
    """

    if trade_type == "Buy":
        stop_loss = entry_price - stop_loss_price
        results = get_decimal_points(stop_loss )

        if results >= 4:
            return stop_loss * 10000

        if results == 3:
            return stop_loss * 100

        if results == 2:
            return stop_loss

    if trade_type == "Sell":
        stop_loss = stop_loss_price - entry_price
        results = get_decimal_points(stop_loss)

        if results >= 4:
            return stop_loss * 10000

        if results == 3:
            return stop_loss * 100

        if results == 2:
            return stop_loss

    return 0


def get_decimal_points(price):
    """
    In the above example, we define a floating-point number my_number with six decimal places. We convert this number
    to a Decimal object using the Decimal() constructor, passing in the string representation of the number.
    We then use the as_tuple() method to get a tuple representation of the number, which includes the exponent.
    Finally, we access the exponent using the exponent attribute of the tuple, which gives us the number of decimal
    places as a negative integer.
    """
    decimal_points = Decimal(str(price)).as_tuple().exponent

    return decimal_points * -1

print(get_stop_loss_pips("Buy", 1.13562, 1.1332))