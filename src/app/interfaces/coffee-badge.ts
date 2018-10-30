export interface CoffeeBadgeList {
    type:  string;
    sort:  string;
    count: number;
    items: Array<any>;
}

interface CoffeeBadge {
    user_badge_id:       string;
    badge_id:            string;
    checkin_id:          string;
    badge_name:          string;
    badge_description:   string;
    badge_active_status: boolean;
    media:               BadgeMedia;
    created_at:          string;
    is_level:            boolean;
    category_id:         number;
    levels:              BadgeLevelList;
}             


interface BadgeLevelList {
    count: number;
    items: Array<BadgeLevel>;
}

interface BadgeLevel {
    actual_badge_id:   string;
    badge_id:          string;
    checkin_id:        string;
    badge_name:        string;
    badge_description: string;
    media:             BadgeMedia;
    created_at:        string;
}

interface BadgeMedia {
    badge_image_sm: string;
    badge_image_md: string;
    badge_image_lg: string;
}