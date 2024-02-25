---
title: test post
author: Jonathon
date: 2024-02-25T10:37:00
---

testing

```sql
SELECT [t].[othercol], SUM([anothercol])
FROM [dbo].[test] AS [t]
WHERE [t].[col] = 5
GROUP BY [t].[othercol];
```