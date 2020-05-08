<?php

namespace App\Helpers\Games;


class CardDeck
{
    private $deck = [
        // D diamonds (♦), C clubs (♣), H hearts (♥), S spades (♠)
        // '2','3','4','5','6','7','8','9','10','J','Q','K','A'
        'C2','C3','C4','C5','C6','C7','C8','C9','CT','CJ','CQ','CK','CA',
        'D2','D3','D4','D5','D6','D7','D8','D9','DT','DJ','DQ','DK','DA',
        'H2','H3','H4','H5','H6','H7','H8','H9','HT','HJ','HQ','HK','HA',
        'S2','S3','S4','S5','S6','S7','S8','S9','ST','SJ','SQ','SK','SA',
    ];

    public function __construct()
    {
        //
    }

    /**
     * Shuffle card deck
     *
     * @return CardDeck
     */
    public function shuffle(): CardDeck
    {
        $shuffledDeck = [];

        $n = count($this->deck);
        while ($n > 0) {
            $shuffledDeck[] = array_splice($this->deck, random_int(0, $n-1), 1)[0];
            $n--;
        }

        $this->deck = $shuffledDeck;

        return $this;
    }

    /**
     * Cut N cards from the deck and append to the end
     *
     * @param $count
     * @return CardDeck
     */
    public function cut($count): CardDeck
    {
        $cutCards = array_splice($this->deck, 0, $count);
        $this->deck = array_merge($this->deck, $cutCards);

        return $this;
    }

    /**
     * Set card deck to a given deck
     *
     * @param $deck
     * @return CardDeck
     */
    public function set($deck): CardDeck
    {
        $this->deck = $deck;

        return $this;
    }

    /**
     * Get a slice of card deck or the whole deck
     *
     * @param int $count
     * @param int $offset - skip given number of cards
     * @return array
     */
    public function get(int $count = 0, int $offset = 0): array
    {
        return $count > 0 ? array_slice($this->deck, $offset, $count) : $this->deck;
    }
}
