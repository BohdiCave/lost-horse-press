/* 
List of tables:

Custom
- Authors - line 32 = author model
- Catalog - line 39 = book model
- Excerpts - line 60 
- News - line 66
- Praise - line 74
- Reviews - line 81

WordPress (BETA version)
- posts - line 89(264) = post model
- postmeta - line 115(290) = include in post model (?) 
- users - line 122(297) = user model
- usermeta - line 135(310)
- options - line 142(317)
- links - line 149(324)
- commentmeta - line 165(340)
- comments - line 172(347)
- terms - line 191(365)
- term-relationships - line 198(372)
- term-taxonomy - line 204(378)
- visual-form-builder-entries - line 213 
- visual-form-builder-fields - line 225
- visual-form-builder-forms - line 242

*/

/* Custom tables */

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `bio` text NOT NULL
)

CREATE TABLE `catalog` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `blurb` text NOT NULL,
  `blurb_author` varchar(100) NOT NULL,
  `author` varchar(255) NOT NULL,
  `isbn` varchar(50) NOT NULL,
  `isbn_hc` varchar(100) DEFAULT NULL,
  `genre` varchar(30) NOT NULL,
  `price_us` varchar(10) NOT NULL,
  `price_can` varchar(10) DEFAULT NULL,
  `price_us_hc` varchar(20) DEFAULT NULL,
  `editor` varchar(100) DEFAULT NULL,
  `bio` text NOT NULL,
  `rewrite` varchar(255) NOT NULL,
  `pages` int(5) NOT NULL,
  `height` varchar(10) NOT NULL,
  `width` varchar(10) NOT NULL,
  `stage` int(11) NOT NULL DEFAULT '2'
)

CREATE TABLE `excerpts` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `excerpt` text NOT NULL
)

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `rewrite` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE `praise` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `praise` text NOT NULL,
  `praise_author` varchar(255) NOT NULL
)

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `review` text NOT NULL
)

/* WordPress tables */

CREATE TABLE `wp_posts` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext NOT NULL,
  `post_title` text NOT NULL,
  `post_excerpt` text NOT NULL,
  `post_status` varchar(20) NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) NOT NULL DEFAULT 'open',
  `post_password` varchar(20) NOT NULL DEFAULT '',
  `post_name` varchar(200) NOT NULL DEFAULT '',
  `to_ping` text NOT NULL,
  `pinged` text NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext NOT NULL,
  `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `guid` varchar(255) NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `post_type` varchar(20) NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT '0'
)

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext
)

CREATE TABLE `wp_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(64) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(60) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) NOT NULL DEFAULT ''
)

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext
)

CREATE TABLE `wp_options` (
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `option_name` varchar(64) NOT NULL DEFAULT '',
  `option_value` longtext NOT NULL,
  `autoload` varchar(20) NOT NULL DEFAULT 'yes'
)

CREATE TABLE `wp_links` (
  `link_id` bigint(20) UNSIGNED NOT NULL,
  `link_url` varchar(255) NOT NULL DEFAULT '',
  `link_name` varchar(255) NOT NULL DEFAULT '',
  `link_image` varchar(255) NOT NULL DEFAULT '',
  `link_target` varchar(25) NOT NULL DEFAULT '',
  `link_description` varchar(255) NOT NULL DEFAULT '',
  `link_visible` varchar(20) NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) UNSIGNED NOT NULL DEFAULT '1',
  `link_rating` int(11) NOT NULL DEFAULT '0',
  `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `link_rel` varchar(255) NOT NULL DEFAULT '',
  `link_notes` mediumtext NOT NULL,
  `link_rss` varchar(255) NOT NULL DEFAULT ''
)

CREATE TABLE `wp_commentmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext
)

CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) UNSIGNED NOT NULL,
  `comment_post_ID` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `comment_author` tinytext NOT NULL,
  `comment_author_email` varchar(100) NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `comment_content` text NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT '0',
  `comment_approved` varchar(20) NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) NOT NULL DEFAULT '',
  `comment_type` varchar(20) NOT NULL DEFAULT '',
  `comment_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0'
)

CREATE TABLE `wp_terms` (
  `term_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL DEFAULT '',
  `slug` varchar(200) NOT NULL DEFAULT '',
  `term_group` bigint(10) NOT NULL DEFAULT '0'
)

CREATE TABLE `wp_term_relationships` (
  `object_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `term_order` int(11) NOT NULL DEFAULT '0'
)

CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `taxonomy` varchar(32) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `count` bigint(20) NOT NULL DEFAULT '0'
)

CREATE TABLE `wp_visual_form_builder_entries` (
  `entries_id` bigint(20) NOT NULL,
  `form_id` bigint(20) NOT NULL,
  `data` text NOT NULL,
  `subject` text,
  `sender_name` varchar(255) DEFAULT NULL,
  `sender_email` varchar(25) DEFAULT NULL,
  `emails_to` text,
  `date_submitted` datetime DEFAULT NULL,
  `ip_address` varchar(25) DEFAULT NULL
)

CREATE TABLE `wp_visual_form_builder_fields` (
  `field_id` bigint(20) NOT NULL,
  `form_id` bigint(20) NOT NULL,
  `field_key` varchar(255) NOT NULL,
  `field_type` varchar(25) NOT NULL,
  `field_options` text,
  `field_description` text,
  `field_name` text NOT NULL,
  `field_sequence` bigint(20) DEFAULT '0',
  `field_parent` bigint(20) DEFAULT '0',
  `field_validation` varchar(25) DEFAULT NULL,
  `field_required` varchar(25) DEFAULT NULL,
  `field_size` varchar(25) DEFAULT 'medium',
  `field_css` varchar(255) DEFAULT NULL,
  `field_layout` varchar(255) DEFAULT NULL
)

CREATE TABLE `wp_visual_form_builder_forms` (
  `form_id` bigint(20) NOT NULL,
  `form_key` tinytext NOT NULL,
  `form_title` text NOT NULL,
  `form_email_subject` text,
  `form_email_to` text,
  `form_email_from` varchar(255) DEFAULT NULL,
  `form_email_from_name` varchar(255) DEFAULT NULL,
  `form_email_from_override` varchar(255) DEFAULT NULL,
  `form_email_from_name_override` varchar(255) DEFAULT NULL,
  `form_success_type` varchar(25) DEFAULT 'text',
  `form_success_message` text,
  `form_notification_setting` varchar(25) DEFAULT NULL,
  `form_notification_email_name` varchar(255) DEFAULT NULL,
  `form_notification_email_from` varchar(255) DEFAULT NULL,
  `form_notification_email` varchar(25) DEFAULT NULL,
  `form_notification_subject` varchar(255) DEFAULT NULL,
  `form_notification_message` text,
  `form_notification_entry` varchar(25) DEFAULT NULL
)

-- /* BETA tables */

-- CREATE TABLE `wp_beta_posts` (
--   `ID` bigint(20) UNSIGNED NOT NULL,
--   `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `post_content` longtext NOT NULL,
--   `post_title` text NOT NULL,
--   `post_excerpt` text NOT NULL,
--   `post_status` varchar(20) NOT NULL DEFAULT 'publish',
--   `comment_status` varchar(20) NOT NULL DEFAULT 'open',
--   `ping_status` varchar(20) NOT NULL DEFAULT 'open',
--   `post_password` varchar(20) NOT NULL DEFAULT '',
--   `post_name` varchar(200) NOT NULL DEFAULT '',
--   `to_ping` text NOT NULL,
--   `pinged` text NOT NULL,
--   `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `post_content_filtered` longtext NOT NULL,
--   `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `guid` varchar(255) NOT NULL DEFAULT '',
--   `menu_order` int(11) NOT NULL DEFAULT '0',
--   `post_type` varchar(20) NOT NULL DEFAULT 'post',
--   `post_mime_type` varchar(100) NOT NULL DEFAULT '',
--   `comment_count` bigint(20) NOT NULL DEFAULT '0'
-- )

-- CREATE TABLE `wp_beta_postmeta` (
--   `meta_id` bigint(20) UNSIGNED NOT NULL,
--   `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `meta_key` varchar(255) DEFAULT NULL,
--   `meta_value` longtext
-- )

-- CREATE TABLE `wp_beta_users` (
--   `ID` bigint(20) UNSIGNED NOT NULL,
--   `user_login` varchar(60) NOT NULL DEFAULT '',
--   `user_pass` varchar(64) NOT NULL DEFAULT '',
--   `user_nicename` varchar(50) NOT NULL DEFAULT '',
--   `user_email` varchar(100) NOT NULL DEFAULT '',
--   `user_url` varchar(100) NOT NULL DEFAULT '',
--   `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `user_activation_key` varchar(60) NOT NULL DEFAULT '',
--   `user_status` int(11) NOT NULL DEFAULT '0',
--   `display_name` varchar(250) NOT NULL DEFAULT ''
-- )

-- CREATE TABLE `wp_beta_usermeta` (
--   `umeta_id` bigint(20) UNSIGNED NOT NULL,
--   `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `meta_key` varchar(255) DEFAULT NULL,
--   `meta_value` longtext
-- )

-- CREATE TABLE `wp_beta_options` (
--   `option_id` bigint(20) UNSIGNED NOT NULL,
--   `option_name` varchar(64) NOT NULL DEFAULT '',
--   `option_value` longtext NOT NULL,
--   `autoload` varchar(20) NOT NULL DEFAULT 'yes'
-- )

-- CREATE TABLE `wp_beta_links` (
--   `link_id` bigint(20) UNSIGNED NOT NULL,
--   `link_url` varchar(255) NOT NULL DEFAULT '',
--   `link_name` varchar(255) NOT NULL DEFAULT '',
--   `link_image` varchar(255) NOT NULL DEFAULT '',
--   `link_target` varchar(25) NOT NULL DEFAULT '',
--   `link_description` varchar(255) NOT NULL DEFAULT '',
--   `link_visible` varchar(20) NOT NULL DEFAULT 'Y',
--   `link_owner` bigint(20) UNSIGNED NOT NULL DEFAULT '1',
--   `link_rating` int(11) NOT NULL DEFAULT '0',
--   `link_updated` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `link_rel` varchar(255) NOT NULL DEFAULT '',
--   `link_notes` mediumtext NOT NULL,
--   `link_rss` varchar(255) NOT NULL DEFAULT ''
-- )

-- CREATE TABLE `wp_beta_commentmeta` (
--   `meta_id` bigint(20) UNSIGNED NOT NULL,
--   `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `meta_key` varchar(255) DEFAULT NULL,
--   `meta_value` longtext
-- )

-- CREATE TABLE `wp_beta_comments` (
--   `comment_ID` bigint(20) UNSIGNED NOT NULL,
--   `comment_post_ID` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `comment_author` tinytext NOT NULL,
--   `comment_author_email` varchar(100) NOT NULL DEFAULT '',
--   `comment_author_url` varchar(200) NOT NULL DEFAULT '',
--   `comment_author_IP` varchar(100) NOT NULL DEFAULT '',
--   `comment_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `comment_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
--   `comment_content` text NOT NULL,
--   `comment_karma` int(11) NOT NULL DEFAULT '0',
--   `comment_approved` varchar(20) NOT NULL DEFAULT '1',
--   `comment_agent` varchar(255) NOT NULL DEFAULT '',
--   `comment_type` varchar(20) NOT NULL DEFAULT '',
--   `comment_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0'
-- )

-- CREATE TABLE `wp_beta_terms` (
--   `term_id` bigint(20) UNSIGNED NOT NULL,
--   `name` varchar(200) NOT NULL DEFAULT '',
--   `slug` varchar(200) NOT NULL DEFAULT '',
--   `term_group` bigint(10) NOT NULL DEFAULT '0'
-- )

-- CREATE TABLE `wp_beta_term_relationships` (
--   `object_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `term_order` int(11) NOT NULL DEFAULT '0'
-- )

-- CREATE TABLE `wp_beta_term_taxonomy` (
--   `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL,
--   `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `taxonomy` varchar(32) NOT NULL DEFAULT '',
--   `description` longtext NOT NULL,
--   `parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
--   `count` bigint(20) NOT NULL DEFAULT '0'
-- )