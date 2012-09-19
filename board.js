			function resetPieces() {

				GAMEOVER = false;
				ctx2.clearRect(0, 0, myPieces.width, myPieces.height);
				ctx3.clearRect(0, 0, myPieces.width, myPieces.height);
				ctx4.clearRect(0, 0, myPieces.width, myPieces.height);
				ctx5.clearRect(0, 0, myPieces.width, myPieces.height);
				var w = myPieces.width;
				myPieces.width = 1;
				myPieces.width = w;

				//reset all firstmoves and promotions of pawns
				//black pieces = 0 (false)
				p21 = new pawn(0); // pawn 1
				p22 = new pawn(0); // pawn 1
				p23 = new pawn(0); // pawn 1
				p24 = new pawn(0); // pawn 1
				p25 = new pawn(0); // pawn 1
				p26 = new pawn(0); // pawn 1
				p27 = new pawn(0); // pawn 1
				p28 = new pawn(0); // pawn 1
				//white pieces = 1 (true)
				p11 = new pawn(1); // pawn 1
				p12 = new pawn(1); // pawn 1
				p13 = new pawn(1); // pawn 1
				p14 = new pawn(1); // pawn 1
				p15 = new pawn(1); // pawn 1
				p16 = new pawn(1); // pawn 1
				p17 = new pawn(1); // pawn 1
				p18 = new pawn(1); // pawn 1

				p1x = new rook(1); // rook 2
				p2x = new rook(0); // rook 2
				p1r = new rook(1); // rook 2
				p2r = new rook(0); // rook 2

				p1k = new king(1); // w
				p2k = new king(0); // b

				ori=1;//orientation
				turn = 1;//white always starts first
				firstClick = true;
			}
			function newBoard(){
				resetPieces();
				piecesArr = [	[p1x,p1h,p1b,p1q,p1k,p1b,p1h,p1r],
								[p11,p12,p13,p14,p15,p16,p17,p18],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[p21,p22,p23,p24,p25,p26,p27,p28],
								[p2x,p2h,p2b,p2q,p2k,p2b,p2h,p2r]	];
				piecesArr = rotate2d(piecesArr);
				drawPieces();
			}
			function castleBoard(){
				resetPieces();
				piecesArr = [	[p1x,non,non,non,p1k,non,non,p1r],
								[p11,p12,p13,p14,p15,p16,p17,p18],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[p21,p22,p23,p24,p25,p26,p27,p28],
								[p2x,non,non,non,p2k,non,non,p2r]	];
				piecesArr = rotate2d(piecesArr);
				drawPieces();
			}
			function enPassBoard(){
				resetPieces();
				piecesArr = [	[non,non,non,non,non,non,p1k,non],
								[non,p12,p13,non,non,non,non,non],
								[non,non,non,non,non,non,non,non],
								[p21,non,non,p23,non,non,non,non],
								[non,non,non,non,p16,non,non,p18],
								[non,non,non,non,non,non,non,non],
								[non,non,non,non,non,p26,p27,non],
								[non,p2k,non,non,non,non,non,non]	];
				piecesArr = rotate2d(piecesArr);
				p16.firstMove=false;
				p18.firstMove=false;
				p21.firstMove=false;
				p23.firstMove=false;
				drawPieces();
			}
			function rotateBoard(){
				piecesArr = rotate2d(piecesArr);
				drawPieces();
			}
			function rotate2d(array){
				//http://stackoverflow.com/questions/2799755/rotate-array-clockwise
				R = array.length;
				C = array[0].length;
				var newArray = new Array(8);
				for (var i = 0; i < 8; i++) {
					newArray[i] = new Array(8);
				}
				for (r = 0; r < R; r++) {
					for (c = 0; c < C; c++) {
						newArray[c][R-1-r] = array[r][c];
					}
				}
				//Orientation
				ori++;
				if (ori==5)
					ori=1;

				return newArray;
			}
			function initBoard(){
				ctx2.font = "14pt Arial";
				ctx3.font = "14pt Arial";
				ctx4.font = "14pt Arial";

				ctx.fillStyle="#000000";
				ctx.shadowOffsetX = 3;
				ctx.shadowOffsetY = 3;
				ctx.shadowBlur = 6;
				ctx.shadowColor = "black";

				ctx.fillStyle="#FFFFFF"; //whiteback
				ctx.fillRect(50,50,400,400);

				ctx.shadowOffsetX = 2;
				ctx.shadowOffsetY = 2;
				ctx.shadowBlur = 5;
				ctx.fillStyle="#BBBBBB";

				for(i=1; i<9; i++){
					for(j=1; j<9; j++){
						ctx.fillRect(i*50,j*50,50,50);
						j++;
					}
					i++;
				}
				for(i=2; i<10; i++){
					for(j=2; j<10; j++){
						ctx.fillRect(i*50,j*50,50,50);
						j++;
					}
					i++;
				}
				ctx.fillStyle="#000000";
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 0;

				ctx.beginPath();
				ctx.lineWidth=2;
				ctx.moveTo(49,49);
				ctx.lineTo(49,449);
				ctx.lineTo(449,449);
				ctx.lineTo(449,49);
				ctx.closePath();
				ctx.stroke();
				for(i=0;i<8;i++){
					ctx.fillText(letterArr[i],i*50+75,25);
				}
				for(i=0;i<8;i++){
					ctx.fillText(i+1,25,i*50+75);
				}
			}