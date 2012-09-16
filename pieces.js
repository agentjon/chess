			function knight(colorP){
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.talk = function() {
					return this.color+" Knight";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
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
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.talk = function() {
					return this.color+" Rook";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
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
					if (!straightpath(x1,y1,x2,y2))
						return diagpath(x1,y1,x2,y2);
					else return straightpath(x1,y1,x2,y2);
				}
			}
			function king(colorP){
				this.color = (colorP) ? "White" : "Black";
				this.colorID = (colorP) ? 1 : -1;
				this.talk = function() {
					return this.color+" King";
				}
				this.checkValidMove = function(x1,y1,x2,y2){
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
						console.log("north")
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
						console.log("south")
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
						console.log("east")
						if(x2-x1==1) return true; //move 1 right instant kill no path
						if(piecesArr[x1+i][y1].color==0){
							arr = [x1+i,y1];
							validArray.push(arr);
						}
						else break;
						i++;
						console.log(x1+i+" "+x2)
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && x1+i==x2){
							return true;
						}
					}
					//CHECK WEST
					i=1;
					while(x1-i>-1 && x1-x2>0 && y2-y1==0){
						console.log("west")
						if(x1-x2==1) return true; //move 1 left instant kill no path
						if(piecesArr[x1-i][y1].color==0){
							arr = [x1-i,y1];
							validArray.push(arr);
						}
						else break;
						i++;
						console.log(x1-i+" "+x2)
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
						if(y2-y1==-1&&x2-x1==1) return true; //move 1 up instant kill no path
						if(piecesArr[x1+i][y1-i].color==0){
							arr = [x1+i,y1-i];
							validArray.push(arr);
						}
						else break;
						i++;
						//path is not broken, so attack now
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1-i==y2 && x1+i==x2){
							return true;
						}
					}
					//CHECK SOUTH EAST
					i=1;
					while(y1+i<8 && x1+i<8 && y2-y1>0 && x2-x1>0){
						if(y2-y1==1&&x2-x1==1) return true; //move 1 down instant kill no path
						if(piecesArr[x1+i][y1+i].color==0){
							arr = [x1+i,y1+i];
							validArray.push(arr);
						}
						else break;
						i++;
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1+i==y2 && x1+i==x2){
							return true;
						}
					}
					//CHECK NORTH WEST
					i=1;
					while(y1-i>-1 && x1-i>-1 && y2-y1<0 && x2-x1<0){
						if(y2-y1==-1&&x2-x1==-1) return true; //move 1 up instant kill no path
						if(piecesArr[x1-i][y1-i].color==0){
							arr = [x1-i,y1-i];
							validArray.push(arr);
						}
						else break;
						i++;
						//path is not broken, so attack now
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1-i==y2 && x1+i==x2){
							return true;
						}
					}
					//CHECK SOUTH WEST
					i=1;
					while(y1+i<8 && x1-i>-1 && y2-y1>0 && x2-x1<0){
						if(y2-y1==1&&x2-x1==-1) return true; //move 1 down instant kill no path
						if(piecesArr[x1-i][y1+i].color==0){
							arr = [x1-i,y1+i];
							validArray.push(arr);
						}
						else break;
						i++;
						if(-(piecesArr[x2][y2].colorID)==piecesArr[x1][y1].colorID && y1+i==y2 && x1-i==x2){
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















