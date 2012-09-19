			function pawn(colorP){
				//check orientation
				//ori 1=whiteLEFT, 2=whiteBOT, 3=whiteRIGHT, 4whiteTOP
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.firstMove = 1; // true
				this.enpassed = false;
				this.talk = function() {
					return this.color+" "+this.firstMove;
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					// console.log("pawnnnnn")
					if(piecesArr[x1][y1].color=="Black"){//BLACK PAWNS only
						switch(ori){//all different orientations of the board 
							// case 1://white LEFT																					up attack																						down attack
							// 	if(piecesArr[x1-1][y1].colorID==0 && x1-x2<2+this.firstMove&&x1-x2>0&&y2-y1==0&&piecesArr[x2][y2].colorID==0 || x2-x1==-1&&y2-y1==-1&&piecesArr[x2][y2].colorID==-(this.colorID) || x2-x1==-1&&y2-y1==1&&piecesArr[x2][y2].colorID==-(this.colorID))
							// 		return true;
							// 	break;
							case 2://white BOT = black TOP																				left attack																						right attack
								if(piecesArr[x1][y1+1].colorID==0 && y2-y1<2+this.firstMove && y2-y1>0 && x2-x1==0 && zero(x2,y2))
									return true; //moving 1 or 2 forward and if 2 then no blockers
								else if(x2-x1==-1 && y2-y1==1 && enemyPiece(x2,y2))
								 	return true; //capture left
								else if(x2-x1==-1 && y2-y1==1 && piecesArr[x2][y2-1].colorID==-(this.colorID) && zero(x2,y2) && enpassant(x2,y2+1)){
									this.enpassed=true;
									return true; //enpassant left and no blockers
								}
								else if(x2-x1==1 && y2-y1==1 && enemyPiece(x2,y2))
									return true; //capture right
								else if(x2-x1==1 && y2-y1==1 && piecesArr[x2][y2-1].colorID==-(this.colorID) && zero(x2,y2) && enpassant(x2,y2+1)){
									this.enpassed=true;
									return true; //enpassant right and no blockers
								}
								break;
							// case 3://white RIGHT																					down attack																						up attack
							// 	if(piecesArr[x1+1][y1].colorID==0 || x2-x1<2+this.firstMove&&x2-x1>0&&y2-y1==0&&piecesArr[x2][y2].colorID==0 || x2-x1==1&&y2-y1==1&&piecesArr[x2][y2].colorID==-(this.colorID) || x2-x1==1&&y2-y1==-1&&piecesArr[x2][y2].colorID==-(this.colorID))
							// 		return true;
							// 	break;
							// case 4://white TOP																					left attack																						right attack
							// 	if(piecesArr[x1][y1-1].colorID==0 || y1-y2<2+this.firstMove&&y1-y2>0&&x2-x1==0&&piecesArr[x2][y2].colorID==0 || x2-x1==-1&&y2-y1==-1&&piecesArr[x2][y2].colorID==-(this.colorID) || x2-x1==1&&y2-y1==-1&&piecesArr[x2][y2].colorID==-(this.colorID))
							// 		return true;
							// 	break;
							default://nothing
						}
					}
					else{//WHITE PAWNS only
						switch(ori){
							// case 1://white LEFT
							// 	if(piecesArr[x1+1][y1].colorID==0 && x2-x1<2+this.firstMove&&x2-x1>0&&y2-y1==0&&piecesArr[x2][y2].colorID==0 || x2-x1==1&&y2-y1==-1&&piecesArr[x2][y2].colorID==-(this.colorID) || x2-x1==1&&y2-y1==1&&piecesArr[x2][y2].colorID==-(this.colorID))
							// 		return true;
							// 	break;
							case 2://white BOT																					left attack			 																			right attack
								if(piecesArr[x1][y1-1].colorID==0 && y1-y2<2+this.firstMove && y1-y2>0 && x2-x1==0 && zero(x2,y2))
									return true; //moving 1 or 2 forward and if 2 then no blockers
								else if(x2-x1==-1 && y2-y1==-1 && enemyPiece(x2,y2))
									return true; //capture left
								else if(x2-x1==-1 && y2-y1==-1 && piecesArr[x2][y2+1].colorID==-(this.colorID) && zero(x2,y2) && enpassant(x2,y2-1)){
									this.enpassed=true;
									return true; //enpassant left and no blockers
								}
								else if(x2-x1==1 && y2-y1==-1 && enemyPiece(x2,y2))
									return true; //capture right
								else if(x2-x1==1 && y2-y1==-1 && piecesArr[x2][y2+1].colorID==-(this.colorID) && zero(x2,y2) && enpassant(x2,y2-1)){
									this.enpassed=true;
									return true; //enpassant right and no blockers
								}
								break;
							// case 3://white RIGHT
							// 	if(piecesArr[x1-1][y1].colorID==0|| x1-x2<2+this.firstMove&&x1-x2>0&&y2-y1==0&&piecesArr[x2][y2].colorID==0 || x2-x1==-1&&y2-y1==1&&piecesArr[x2][y2].colorID==-(this.colorID) || x2-x1==-1&&y2-y1==-1&&piecesArr[x2][y2].colorID==-(this.colorID))
							// 		return true;
							// 	break;
							// case 4://white TOP
							// 	if(piecesArr[x1][y1+1].colorID==0 || y2-y1<2+this.firstMove&&y2-y1>0&&x2-x1==0&&piecesArr[x2][y2].colorID==0 || x2-x1==-1&&y2-y1==1&&piecesArr[x2][y2].colorID==-(this.colorID) || x2-x1==1&&y2-y1==1&&piecesArr[x2][y2].colorID==-(this.colorID))
							// 		return true;
							// 	break;
							default://nothing
						}
					}
				return false;
				}//checkValid
			}//pawn

		//pawns functions
			function enpassant(x2,y2){
				if(enpassing[0]==x2&&enpassing[1]==y2)return true;
				else return false;
			}
			function zero(x2,y2){
				if(piecesArr[x2][y2].colorID==0)return true;
				else return false;
			}
			function enemyPiece(x2,y2){
				if(piecesArr[x2][y2].colorID==-(piecesArr[x1][y1].colorID)) return true;
				else return false;
			}

			function knight(colorP){
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.talk = function() {
					return this.color+" Knight";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					if(piecesArr[x1][y1].colorID==piecesArr[x2][y2].colorID) return false;
					//SSW
					if(x1+1 == x2 && y1+2 == y2)
						return true;
					//SWW
					if(x1+2 == x2 && y1+1 == y2)
						return true;
					//NNW
					if(x1+1 == x2 && y1-2 == y2)
						return true;
					//NWW
					if(x1+2 == x2 && y1-1 == y2)
						return true;
					//SSE
					if(x1-1 == x2 && y1+2 == y2)
						return true;
					//SEE
					if(x1-2 == x2 && y1+1 == y2)
						return true;
					//NNE
					if(x1-1 == x2 && y1-2 == y2)
						return true;
					//NEE
					if(x1-2 == x2 && y1-1 == y2)
						return true;

					return false;
				}
			}
			function rook(colorP){
				this.color = (colorP) ? "W" : "B";
				this.colorID = (colorP) ? 1 : -1;
				this.firstMove=true;
				this.talk = function() {
					return this.color+" Rook "+this.firstMove;
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					if(piecesArr[x1][y1].colorID==piecesArr[x2][y2].colorID) return false;
					return straightpath(x1,y1,x2,y2);
				}
			}
			function bishop(colorP){
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.talk = function() {
					return this.color+" Bishop";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					if(piecesArr[x1][y1].colorID==piecesArr[x2][y2].colorID) return false;
					return diagpath(x1,y1,x2,y2);
				}
			}
			function queen(colorP){
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.talk = function() {
					return this.color+" Queen";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					if(piecesArr[x1][y1].colorID==piecesArr[x2][y2].colorID) return false;
					if (!straightpath(x1,y1,x2,y2))
						return diagpath(x1,y1,x2,y2);
					else return straightpath(x1,y1,x2,y2);
				}
			}
			function king(colorP){
				this.color = (colorP) ? "W" : "B";
				this.colorID = (colorP) ? 1 : -1;
				this.firstMove=true;
				this.talk = function() {
					return this.color+" King "+this.firstMove;
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					//CASTLE case 2 orientation
					if(piecesArr[x1][y1].firstMove==true && piecesArr[x1][y1].colorID==1 && y2==7){//white is on bot
						//white right side castle
						if(x2==6 && piecesArr[7][7].firstMove==true && zero(6,7) && zero(5,7)){
							console.log(y2)
							return true;
						}
						//white left side castle
						else if(x2==2 && piecesArr[0][7].firstMove==true && zero(1,7) && zero(2,7) && zero(3,7)){
							return true;
						}
					}
					if(piecesArr[x1][y1].firstMove==true && piecesArr[x1][y1].colorID==-1 && y2==0){//black is on top
						//black left side castle
						if(x2==2 && piecesArr[0][0].firstMove==true && zero(1,0) && zero(2,0) && zero(3,0)){
							console.log(y2)
							return true;
						}
						//black right side castle
						else if(x2==6 && piecesArr[7][0].firstMove==true && zero(6,0) && zero(5,0)){
							return true;
						}
					}
					if(piecesArr[x1][y1].colorID==piecesArr[x2][y2].colorID) return false;
					if(Math.abs(x2-x1)<2 && Math.abs(y2-y1)<2){
						return true;
					}
					return false;
				}
			}
			function none(){
				this.color = 0;
				this.colorID = 0;
				this.talk = function() {
					return this.color+"";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
					return false;
				}
			}


			
			//first move for king and rook for castling
			function straightpath(x1,y1,x2,y2){
				validArray.length=0;
					//CHECK NORTH
					i=1;
					while(y1-i>-1 && y2-y1<0 && x2-x1==0){
						// console.log("s north")
						if(y1-y2==1) return true; //move 1 up instant kill no path
						if(piecesArr[x1][y1-i].color==0){
							arr = [x1,y1-i];
							validArray.push(arr);
						}
						else break;
						i++;
						//path is not broken, so attack now
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1-i==y2){
							return true;
						}
					}
					//CHECK SOUTH
					i=1;
					while(y1+i<8 && y1-y2<0 && x2-x1==0){
						// console.log("s south")
						if(y2-y1==1) return true; //move 1 down instant kill no path
						if(piecesArr[x1][y1+i].color==0){
							arr = [x1,y1+i];
							validArray.push(arr);
						}
						else break;
						i++;
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1+i==y2){
							return true;
						}
					}
					//CHECK EAST
					i=1;
					while(x1+i<8 && x2-x1>0 && y2-y1==0){
						// console.log("s east")
						if(x2-x1==1) return true; //move 1 right instant kill no path
						if(piecesArr[x1+i][y1].color==0){
							arr = [x1+i,y1];
							validArray.push(arr);
						}
						else break;
						i++;
						// console.log(x1+i+" "+x2)
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && x1+i==x2){
							return true;
						}
					}
					//CHECK WEST
					i=1;
					while(x1-i>-1 && x1-x2>0 && y2-y1==0){
						// console.log("s west")
						if(x1-x2==1) return true; //move 1 left instant kill no path
						if(piecesArr[x1-i][y1].color==0){
							arr = [x1-i,y1];
							validArray.push(arr);
						}
						else break;
						i++;
						// console.log(x1-i+" "+x2)
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && x1-i==x2){
							return true;
						}
					}
					//FINALLY
					for(i=0;i<validArray.length;i++){
						// console.log(validArray[i][1])
						if(validArray[i][0]==x2 && validArray[i][1]==y2){
							return true;
						}
					}
					return false;
			}
			function diagpath(x1,y1,x2,y2){
				validArray.length=0;
					//CHECK NORTH EAST
					i=1;
					while(y1-i>-1 && x1+i<8 && y2-y1<0 && x2-x1>0){
						// console.log("NE")
						if(y2-y1==-1&&x2-x1==1) return true; //move 1 up instant kill no path
						if(piecesArr[x1+i][y1-i].color==0){
							arr = [x1+i,y1-i];
							validArray.push(arr);
						}
						else break;
						i++;
						//path is not broken, so attack now
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1-i==y2 && x1+i==x2){
							// console.log("north east")
							return true;
						}
					}
					//CHECK SOUTH EAST
					i=1;
					while(y1+i<8 && x1+i<8 && y2-y1>0 && x2-x1>0){
						// console.log("SE")
						if(y2-y1==1&&x2-x1==1) return true; //move 1 down instant kill no path
						if(piecesArr[x1+i][y1+i].color==0){
							arr = [x1+i,y1+i];
							validArray.push(arr);
						}
						else break;
						i++;
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1+i==y2 && x1+i==x2){
							// console.log("South east")
							return true;
						}
					}
					//CHECK NORTH WEST
					i=1;
					while(y1-i>-1 && x1-i>-1 && y2-y1<0 && x2-x1<0){
						// console.log("NW")
						if(y2-y1==-1&&x2-x1==-1) return true; //move 1 up instant kill no path
						if(piecesArr[x1-i][y1-i].color==0){
							arr = [x1-i,y1-i];
							validArray.push(arr);
						}
						else break;
						i++;
						//path is not broken, so attack now
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1-i==y2 && x1-i==x2){
							// console.log(" North west")
							return true;
						}
					}
					//CHECK SOUTH WEST
					i=1;
					while(y1+i<8 && x1-i>-1 && y2-y1>0 && x2-x1<0){
						// console.log("SW")
						if(y2-y1==1&&x2-x1==-1) return true; //move 1 down instant kill no path
						if(piecesArr[x1-i][y1+i].color==0){
							arr = [x1-i,y1+i];
							validArray.push(arr);
						}
						else break;
						i++;
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1+i==y2 && x1-i==x2){
							// console.log("south west")
							return true;
						}
					}
					//FINALLY
					for(i=0;i<validArray.length;i++){
						if(validArray[i][0]==x2 && validArray[i][1]==y2){
							return true;
						}
					}
					return false;
			}















