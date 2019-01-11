import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  Update = '[Product] Update',
  UpdateSuccess = '[Product] Update Success',
  UpdateFail = '[Product] Update Fail',
  Create = '[Product] Create',
  CreateSuccess = '[Product] Create Success',
  CreateFail = '[Product] Create Fail',
  Delete = '[Product] Delete',
  DeleteSuccess = '[Product] Delete Success',
  DeleteFail = '[Product] Delete Fail',
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor(public payload: boolean) { }
}
export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) { }
}
export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}
export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}
export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: Product[]) { }
}
export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;
  constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.Update;
  constructor(public payload: Product) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateSuccess;
  constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateFail;
  constructor(public payload: string) { }
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.Create;
  constructor(public payload: Product) { }
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateSuccess;
  constructor(public payload: Product) { }
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateFail;
  constructor(public payload: string) { }
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.Delete;
  constructor(public payload: number) { }
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteSuccess;
  constructor(public payload: number) { }
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteFail;
  constructor(public payload: string) { }
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | LoadFail
  | LoadSuccess
  | Load
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;

