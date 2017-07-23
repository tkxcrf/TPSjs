describe( "TPS Core", function()
{
    var src = [ [ 3.6929, 10.3819 ], [ 6.5827, 8.8386 ], [ 6.7756, 12.0866 ], [ 4.8189, 11.2047 ], [ 5.6969, 10.0748 ] ]
    var dst = [ [ 3.9724, 6.5354 ], [ 6.6969, 4.1181 ], [ 6.5394, 7.2362 ], [ 5.4016, 6.4528 ], [ 5.7756, 5.1142 ] ]

    var g = {
    src : [ [ 3.6929, 10.3819 ], [ 6.5827, 8.8386 ], [ 6.7756, 12.0866 ], [ 4.8189, 11.2047 ], [ 5.6969, 10.0748 ] ],
    dst : [ [ 3.9724, 6.5354 ], [ 6.6969, 4.1181 ], [ 6.5394, 7.2362 ], [ 5.4016, 6.4528 ], [ 5.7756, 5.1142 ] ],
    linear : [ [ 1.3549958177370538, - 2.9459630809984034 ], [ 0.874725874866678, - 0.2955605626378657 ], [ - 0.028860413349610394, 0.9216325921181693 ] ],
    weights : [ [ - 0.038030135354319525, 0.04244692805941579 ], [ 0.023187750609017264, 0.01591661176988465 ], [ - 0.024755055674439905, 0.02881348059437224 ], [ 0.0797822576121929, - 0.045425521193799105 ], [ - 0.04018481719245081, - 0.041751499229873576 ] ]
    };

    it( "TPS_generate", function()
    {
        expect( TPS_generate( src, dst ) ).toEqual( g );
    } );

    it( "TPS_project", function()
    {
        expect( TPS_project( g, 3.6929, 10.3819 ) ).toEqual( [ 3.972399999999999, 6.5354 ] );
    } );
} );
