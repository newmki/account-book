# Data 

```
export interface Tag {
  id: number;
  title: string;
}

export interface AccountHistory {
  date: string;
  amount: number;
  type: '입금' | '출금';
  memo: string;
  tags: Tag[];
}

export interface Bankbook {
  id: number;
  title: string;
  balance: number;
  tags: Tag[];
  accountName: string;
  accountNumber: string;
  accountHistory: AccountHistory[];
  description?: string;
}
```

# API List

|URI|Method|Description|
|---|---|---|
|[/api/accounts](https://github.com/newmki/account-book#post)|POST|계좌를 생성합니다|
|[/api/accounts](https://github.com/newmki/account-book#get)|GET|모든 계좌정보를 불러옵니다|
|[/api/accounts?tag](https://github.com/newmki/account-book#get-1)|GET|선택한 태그로 계좌를 검색합니다|
|[/api/accounts/:accountId](https://github.com/newmki/account-book#post-1)|POST|선택한 계좌에 기록합니다|
|[/api/accounts/:accountId](https://github.com/newmki/account-book#get-2)|GET|선택한 계좌 정보를 불러옵니다|
|[/api/accounts/:accountId](https://github.com/newmki/account-book#patch)|PATCH|선택한 계좌 정보를 수정합니다|
|[/api/accounts/:accountId](https://github.com/newmki/account-book#delete)|DELETE|선택한 계좌를 삭제합니다|
|[/api/accounts/:accountId/history](https://github.com/newmki/account-book#get-3)|GET|선택한 계좌 기록을 불러옵니다|
|[/api/accounts/:accountId/history?tag](https://github.com/newmki/account-book#get-4)|GET|선택된 태그로 계좌 기록을 검색합니다|
|[/api/accounts/:accountId/history](https://github.com/newmki/account-book#delete-1)|DELETE|선택한 계좌의 모든 기록을 삭제합니다|

# /api/accounts

## POST

- 계좌를 생성합니다

### Request
```
{
    "title": "월급통장",
    "balance": 95000000,
    "tags": [],
    "accountName": "국민은행",
    "accountNumber": "94671265555",
    "accountHistory": [],
    "description": "목표는 1억"
}
```

### Response
```
{
    "message": "Account created",
    "data": {
        "title": "월급통장",
        "balance": 95000000,
        "tags": [],
        "accountName": "국민은행",
        "accountNumber": "94671265555",
        "accountHistory": [],
        "description": "목표는 1억",
        "id": 1
    }
}
```

### Error
```
```

## GET

- 모든 계좌정보를 불러옵니다

### Request
```
```

### Response
```
{
    "message": "It's all accounts",
    "data": [
        {
            "title": "월급통장",
            "balance": 95000000,
            "tags": [],
            "accountName": "국민은행",
            "accountNumber": "94671265555",
            "accountHistory": [],
            "description": "목표는 1억",
            "id": 0
        },
        {
            "title": "월급통장",
            "balance": 95000000,
            "tags": [],
            "accountName": "국민은행",
            "accountNumber": "94671265555",
            "accountHistory": [],
            "description": "목표는 1억",
            "id": 1
        }
    ]
}
```

### Error
```
```

# /api/accounts?tag

## GET

- 선택한 태그로 계좌를 검색합니다

### Request
```
```

### Response
```
{
    "message": "These are 월급 tag accounts",
    "data": [
        {
            "id": 0,
            "title": "복권당첨",
            "balance": 10000000000000,
            "tags": [
                "월급",
                "용돈"
            ],
            "accountName": "국민은행",
            "accountNumber": "94671265555",
            "accountHistory": [],
            "description": "목표는 1억"
        }
    ]
}
```

### Error
```
```

# /api/accounts/:accountId

## POST

- 선택한 계좌에 기록합니다

### Request
```
{
    "date": "2022-01-01",
    "amount": 100,
    "type": "출금",
    "memo": "떡볶이",
    "tags": []
}
```

### Response
```
{
    "message": "It's history of account 1",
    "data": [
        {
            "date": "2022-01-01",
            "amount": 100,
            "type": "출금",
            "memo": "떡볶이",
            "tags": []
        },
        {
            "date": "2022-01-01",
            "amount": 100,
            "type": "출금",
            "memo": "떡볶이",
            "tags": []
        }
    ]
}
```

### Error
```
{
    "message": "Couldn't find account",
    "data": {}
}
```

## GET

- 선택한 계좌 정보를 불러옵니다

### Request
```
```

### Response
```
{
    "message": "Found account",
    "data": {
        "title": "월급통장",
        "balance": 95000000,
        "tags": [],
        "accountName": "국민은행",
        "accountNumber": "94671265555",
        "accountHistory": [],
        "description": "목표는 1억",
        "id": 1
    }
}
```

### Error
```
{
    "message": "Couldn't find account",
    "data": {}
}
```

## PATCH

- 선택한 계좌 정보를 수정합니다

### Request
```
{
    "title": "복권당첨",
    "balance": 10000000000000,
    "tags": [],
    "accountName": "리노은행",
    "accountNumber": "946123123",
    "description": "목표는 2조"
}
```

### Response
```
{
    "message": "Account is updated",
    "data": {
        "title": "복권당첨",
        "balance": 10000000000000,
        "tags": [],
        "accountName": "리노은행",
        "accountNumber": "946123123",
        "accountHistory": [],
        "description": "목표는 2조",
        "id": 0
    }
}
```

### Error
```
{
    "message": "Couldn't find account",
    "data": {}
}
```

## DELETE

- 선택한 계좌를 삭제합니다

### Request
```
```

### Response
```
{
    "message": "Account 0 is deleted",
    "data": [
        {
            "title": "월급통장",
            "balance": 95000000,
            "tags": [],
            "accountName": "국민은행",
            "accountNumber": "94671265555",
            "accountHistory": [],
            "description": "목표는 1억",
            "id": 0
        }
    ]
}
```

### Error
```
{
    "message": "Couldn't find account",
    "data": {}
}
```

# /api/accounts/:accountId/history

## GET

= 선택한 계좌 기록을 불러옵니다

### Request
```
```

### Response
```
{
    "message": "It's history of account 1",
    "data": [
        {
            "date": "2022-01-01",
            "amount": 100,
            "type": "출금",
            "memo": "떡볶이",
            "tags": [
                "간식"
            ]
        },
        {
            "date": "2022-01-01",
            "amount": 100,
            "type": "출금",
            "memo": "떡볶이",
            "tags": [
                "간식"
            ]
        }
    ]
}
```

### Error
```
```

# /api/accounts/:accountId/history?tag

## GET

- 선택된 태그로 계좌 기록을 검색합니다

### Request
```
```

### Response
```
{
    "message": "It's history of account 1 of 간식 tag",
    "data": [
        {
            "date": "2022-01-01",
            "amount": 100,
            "type": "출금",
            "memo": "떡볶이",
            "tags": [
                "간식"
            ]
        },
        {
            "date": "2022-01-01",
            "amount": 100,
            "type": "출금",
            "memo": "떡볶이",
            "tags": [
                "간식"
            ]
        }
    ]
}
```

### Error
```
```

## DELETE

- 선택한 계좌의 모든 기록을 삭제합니다

### Request
```
```

### Response
```
{
    "message": "History of account 1 is deleted",
    "data": {}
}
```

### Error
```
```
