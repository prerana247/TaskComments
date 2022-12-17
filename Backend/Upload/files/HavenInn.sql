create database HavenInn
use HavenInn
Go 

Create table [User]
(
UserId	int Primary key identity(1,1),
[Password]	nvarchar(255),
[Role]	varchar(20),
StaffId	int,
Email	nvarchar(50) unique 
)



Create table Staff
(
StaffId	int	primary key Identity(100,1),
DepartmentId	int	,
FirstName	varchar(100),	
LastName	varchar(100),	
Gender	varchar(10)	,
DOB	date	,
DOJ	date	,
[Address]	varchar(255),	
Salary	decimal(8,2),	
MobileNumber	varchar(10)	,
Email	nvarchar(50)	Unique
)




create table Department
(
 DepartmentId	int	Primary key Identity(1,1),
DepartmentName	varchar(255)	
)

Create table Guest
(
GuestId int identity(1,1) primary key,
[Name] varchar(255),
Email nvarchar(100),
MobileNo varchar(10),
AadharCardNo bigint
)


create table Reservation
(
	ReservationId int primary key identity(1,1),
	GuestId int,
	UserId int,
	RoomId	int,
	ServiceID	int,
	CheckIn	datetime,
	CheckOut	datetime,
	BookingTime	time,
	noOfNights	int,
	numberOfAdults	int,
	numberOfChildren	int
)



Create Table RoomType 
(
RoomTypeId int primary key identity(1,1),
RoomTypeName varchar(255),
Price decimal(10,2)
)

Create Table Room (
RoomId int Primary Key ,
RoomTypeId int ,
isAvailable bit,	
[Description] varchar(255)	
)


Create table Bill
(
BillId int primary key identity(1,1),
PaymentMode varchar(20), 	
ReservationId int ,
TotalPrice decimal(16,2),	
paymentTime datetime, 	
TransactionId varchar(255) Null,
[Status] varchar(50)
)



Create table Inventory 
(
InventoryId	int Primary key Identity(1,1),
Item	varchar(100),
Category	varchar(20),
Quantity	int,
UnitPrice	decimal,
isStockAvailable bit,
UserId	int
)



create table [Services]
(
ServiceId	int	primary key identity(1,1),
[ServiceName]	varchar(20),
Price	decimal(10,2)	
)

ALTER TABLE [User]
ADD CONSTRAINT FK_User_Staff
FOREIGN KEY (StaffId) REFERENCES Staff(StaffId) 
on delete set null

ALTER TABLE Staff
ADD CONSTRAINT FK_Staff_Department
FOREIGN KEY (DepartmentId) REFERENCES Department(DepartmentId) 
on delete set null

ALTER TABLE [Reservation]
ADD CONSTRAINT FK_Reservation_Guest
FOREIGN KEY (GuestId) REFERENCES Guest(GuestId) 
on delete set null

ALTER TABLE [Reservation]
ADD CONSTRAINT FK_Reservation_User
FOREIGN KEY (UserId) REFERENCES [User](UserId) 
on delete set null

ALTER TABLE [Reservation]
ADD CONSTRAINT FK_Reservation_Services
FOREIGN KEY (ServiceId) REFERENCES [Services](ServiceId) 
on delete set null

ALTER TABLE [Reservation]
ADD CONSTRAINT FK_Reservation_Room
FOREIGN KEY (RoomId) REFERENCES Room(RoomId) 
on delete set null

ALTER TABLE Room
ADD CONSTRAINT FK_Room_RoomType
FOREIGN KEY (RoomTypeId) REFERENCES RoomType(RoomTypeId) 
on delete set null

ALTER TABLE Inventory
ADD CONSTRAINT FK_Inventory_User
FOREIGN KEY (UserId) REFERENCES [User](UserId) 
on delete set null

Insert into Department values ('HR')
Insert into Department values ('IT')
Insert into Department values ('Finance')
Insert into Department values ('Hospitality')

Insert into Staff values (4,'Naveen','Kumar','Male','2002-03-05','2022-07-07',
                          '13-190/A Tic point Arilova Vizag AndhraPradesh 530040',55555,
		                 '9392722676','194079.gvp@gmail.com')
Insert into Staff values (3,'Ruchitha','Padala','Female','2001-11-20','2022-07-07',
                          'Vizag AndhraPradesh 530040',666666,
		                 '9999999999','ruchithamadhuri@gmail.com')
INSERT INTO Staff VALUES(1,'Arfin','Sayyed','Female','2001-08-02','2022-07-07',
'Mumbai, Maharashtra - 401107',50000, '9930152068','arfinsayyed208@gmail.com')
INSERT INTO Staff VALUES(3, 'Shama' , 'Anpat' , 'Female' , '2001-07-10' , '2022-07-07' , 
'Maharashtra,Mumbai:4000067' , 66666, '9082940289', 'shamaanpat10@gmail.com')
INSERT INTO Staff VALUES(2,'Asavari','Akshekar','Female','2001-12-09','2022-07-07',
'Mumbai, Maharashtra - 400068',60000, '7738906022','asavariakshekar@gmail.com')
Insert into Staff Values (2,'Prerana','Waghela','Female','2001-07-24','2022-07-07',
'Mumbai,Maharashtra-400011',40000,'9004958256','prerana618@gmail.com')
Insert into Staff Values (4,'Anisha','Dubey','Female','2001-01-18','2022-07-07',
'Mumbai,Maharashtra-401602',115200,'9923782059','anishadubey18@gmail.com')
INSERT INTO Staff VALUES(3,'Swati','More','Female','2001-04-28','2022-07-07',
'Latur, Maharashtra - 413512',20000, '8080112949','swatimore284@gmail.com')
Insert into staff values(2, 'Shruti', 'Satam','Female', '2001-10-10', '2022-07-07',
'Mumbai, Maharashtra - 400060',55000, '8168841568', 'shrutisatam10@gmail.com')
Insert into Staff Values (2,'Janhavi','Gangan','Female','2001-10-13','2022-07-07',
'Mumbai,Maharashtra-400042',165400,'9854756324','janhavigangan07@gmail.com')

Insert Into [User] Values('12345','Manager',103,'shamaanpat10@gmail.com')
INSERT INTO [User] Values('12345','Owner',106,'anishadubey18@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',102,'arfinsayyed208@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',108,'shrutisatam10@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',101,'ruchithamadhuri@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',109,'janhavigangan07@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',105,'prerana618@gmail.com')
Insert into [User] values('12345','Manager',100,'194079.gvp@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',104,'asavariakshekar@gmail.com')
INSERT INTO [User] Values('12345','Receptionist',107,'swatimore284@gmail.com')

INSERT INTO RoomType values('Single AC',1500)
INSERT INTO RoomType values('Single Non-AC',1000)
INSERT INTO RoomType values('Double AC',2500)
INSERT INTO RoomType values('Double Non-AC',2000)
INSERT INTO RoomType values('Deluxe Suite',4000)

INSERT INTO Room values(101,1,1,'King size bed,Seating area,Digital safe')
INSERT INTO Room values(102,5,1,'Deluxe king size room,Seating area, Ample storage')
INSERT INTO Room values(201,2,1,'Budget rooms,Compact bedrooms')
INSERT INTO Room values(202,3,1,'Digital safe,Mini fridge')
INSERT INTO Room values(301,5,1,'Ample storage,Mini fridge,Landscaped gardens')
INSERT INTO Room values(302,4,1,'Compact Bedrooms,Mini fridge,Seating area')

INSERT INTO [Services] values('Spa',700)
INSERT INTO [Services] values('Gym',899)
INSERT INTO [Services] values('Gamezone',999)
INSERT INTO [Services] values('Buffet',799)
INSERT INTO [Services] values('Laundry & Ironing',499)
INSERT INTO [Services] values('Mini Fridge',1499)

Insert into Guest values('Ranbir Kapoor','ranbir@gmail.com','9959382337',880044523525)
Insert into Guest values('Alia Bhatt','alia05@gmail.com','9989891350',990044523533)
Insert into Guest values('Anisha','anishadubey1801@gmail.com','738612337',408466778822)



insert into Reservation values(1,3,301,2,'2022-09-22','2022-09-29',CURRENT_TIMESTAMP,7,1,0)
update Room set isAvailable=0 where RoomId=301
insert into Reservation values(2,3,102,1,'2022-09-24','2022-09-27',CURRENT_TIMESTAMP,3,2,1)
update Room set isAvailable=0 where RoomId=102
insert into Reservation values(3,3,201,3,'2022-09-20','2022-09-25',CURRENT_TIMESTAMP,5,1,1)
update Room set isAvailable=0 where RoomId=201

INSERT INTO Inventory values('AC','Electronics',25,30000,1,1)
INSERT INTO Inventory values('TV','Electronics',25,40000,1,1)
INSERT INTO Inventory values('Bed','Furnishing',25,80000,1,1)
INSERT INTO Inventory values('Table & Chairs','Furnishing',25,24000,1,1)
INSERT INTO Inventory values('Vegetables','Food',25,50000,1,1)
INSERT INTO Inventory values('Cutlary','Kitchen',25,60000,1,1)


declare @rprice decimal(10,2)
(select @rprice=Price  from RoomType
inner join Room on Room.RoomTypeId=RoomType.RoomTypeId
inner join Reservation on Reservation.RoomId=Room.RoomId 
where Reservation.RoomId=201) 
print @rprice
declare @nights int
select @nights=noOfNights  from Reservation where ReservationId=3
print @nights
declare @sprice decimal(10,2)
(select @sprice=Price from [Services]
inner join Reservation on Reservation.ServiceID=[Services].ServiceId 
where Reservation.ReservationId=3)
print @sprice

declare @totalprice decimal(10,2)
set @totalprice=@rprice*@nights+@sprice
print @totalprice


insert into bill 
values(
'Cash',
3,
@totalprice,
CURRENT_TIMESTAMP,
null,
'Paid'
)

Select * from Bill
Select * from Department
Select * from Guest
Select * from Inventory
Select * from Reservation
Select * from Room
Select * from RoomType
Select * from [Services]
Select * from Staff
Select * from [User]

select * from Room where isAvailable='true'
select * from Bill where Status='Paid'
Select * from Inventory where isStockAvailable='true'