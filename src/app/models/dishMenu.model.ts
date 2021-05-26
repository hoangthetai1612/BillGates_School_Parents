export interface DishMenu {
  Type: number;
  DayValue1: string;
  DayValue2: string;
  DayValue3: string;
}
export interface DishMenuOverview {
  DishMenuId: number;
  DishId: number;
  DishName: string;
  MenuId: number;
  DayValue: number;
  Type: number;
  Status: number;
  OldDishName: string;
}

export interface Menu {
  SchoolLevelId: number;
  StartDate: string;
  DishMenuList: DishMenu[];
}

