-- RedefineIndex
CREATE UNIQUE INDEX `collection_user_email_anime_mal_id_key` ON `collection`(`user_email`, `anime_mal_id`);
DROP INDEX `Collection_user_email_anime_mal_id_key` ON `collection`;
