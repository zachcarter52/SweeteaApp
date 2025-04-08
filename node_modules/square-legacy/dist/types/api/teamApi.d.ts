import { ApiResponse, RequestOptions } from '../core';
import { BulkCreateTeamMembersRequest } from '../models/bulkCreateTeamMembersRequest';
import { BulkCreateTeamMembersResponse } from '../models/bulkCreateTeamMembersResponse';
import { BulkUpdateTeamMembersRequest } from '../models/bulkUpdateTeamMembersRequest';
import { BulkUpdateTeamMembersResponse } from '../models/bulkUpdateTeamMembersResponse';
import { CreateJobRequest } from '../models/createJobRequest';
import { CreateJobResponse } from '../models/createJobResponse';
import { CreateTeamMemberRequest } from '../models/createTeamMemberRequest';
import { CreateTeamMemberResponse } from '../models/createTeamMemberResponse';
import { ListJobsResponse } from '../models/listJobsResponse';
import { RetrieveJobResponse } from '../models/retrieveJobResponse';
import { RetrieveTeamMemberResponse } from '../models/retrieveTeamMemberResponse';
import { RetrieveWageSettingResponse } from '../models/retrieveWageSettingResponse';
import { SearchTeamMembersRequest } from '../models/searchTeamMembersRequest';
import { SearchTeamMembersResponse } from '../models/searchTeamMembersResponse';
import { UpdateJobRequest } from '../models/updateJobRequest';
import { UpdateJobResponse } from '../models/updateJobResponse';
import { UpdateTeamMemberRequest } from '../models/updateTeamMemberRequest';
import { UpdateTeamMemberResponse } from '../models/updateTeamMemberResponse';
import { UpdateWageSettingRequest } from '../models/updateWageSettingRequest';
import { UpdateWageSettingResponse } from '../models/updateWageSettingResponse';
import { BaseApi } from './baseApi';
export declare class TeamApi extends BaseApi {
    /**
     * Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
     * You must provide the following values in your request to this endpoint:
     * - `given_name`
     * - `family_name`
     *
     * Learn about [Troubleshooting the Team API](https://developer.squareup.
     * com/docs/team/troubleshooting#createteammember).
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                       See the corresponding object definition for field details.
     * @return Response from the API call
     */
    createTeamMember(body: CreateTeamMemberRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateTeamMemberResponse>>;
    /**
     * Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful
     * creates.
     * This process is non-transactional and processes as much of the request as possible. If one of the
     * creates in
     * the request cannot be successfully processed, the request is not marked as failed, but the body of
     * the response
     * contains explicit error information for the failed create.
     *
     * Learn about [Troubleshooting the Team API](https://developer.squareup.
     * com/docs/team/troubleshooting#bulk-create-team-members).
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    bulkCreateTeamMembers(body: BulkCreateTeamMembersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkCreateTeamMembersResponse>>;
    /**
     * Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful
     * updates.
     * This process is non-transactional and processes as much of the request as possible. If one of the
     * updates in
     * the request cannot be successfully processed, the request is not marked as failed, but the body of
     * the response
     * contains explicit error information for the failed update.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.
     * com/docs/team/troubleshooting#bulk-update-team-members).
     *
     * @param body         An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    bulkUpdateTeamMembers(body: BulkUpdateTeamMembersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<BulkUpdateTeamMembersResponse>>;
    /**
     * Lists jobs in a seller account. Results are sorted by title in ascending order.
     *
     * @param cursor The pagination cursor returned by the previous call to this endpoint. Provide this cursor
     *                         to retrieve the next page of results for your original request. For more information, see
     *                         [Pagination](https://developer.squareup.com/docs/build-basics/common-api-
     *                         patterns/pagination).
     * @return Response from the API call
     */
    listJobs(cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListJobsResponse>>;
    /**
     * Creates a job in a seller account. A job defines a title and tip eligibility. Note that
     * compensation is defined in a [job assignment]($m/JobAssignment) in a team member's wage setting.
     *
     * @param body         An object containing the fields to POST for the request.  See the
     *                                                corresponding object definition for field details.
     * @return Response from the API call
     */
    createJob(body: CreateJobRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateJobResponse>>;
    /**
     * Retrieves a specified job.
     *
     * @param jobId  The ID of the job to retrieve.
     * @return Response from the API call
     */
    retrieveJob(jobId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveJobResponse>>;
    /**
     * Updates the title or tip eligibility of a job. Changes to the title propagate to all
     * `JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to
     * tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.
     *
     * @param jobId        The ID of the job to update.
     * @param body         An object containing the fields to POST for the request.  See the
     *                                                corresponding object definition for field details.
     * @return Response from the API call
     */
    updateJob(jobId: string, body: UpdateJobRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateJobResponse>>;
    /**
     * Returns a paginated list of `TeamMember` objects for a business.
     * The list can be filtered by location IDs, `ACTIVE` or `INACTIVE` status, or whether
     * the team member is the Square account owner.
     *
     * @param body         An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchTeamMembers(body: SearchTeamMembersRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchTeamMembersResponse>>;
    /**
     * Retrieves a `TeamMember` object for the given `TeamMember.id`.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.
     * com/docs/team/troubleshooting#retrieve-a-team-member).
     *
     * @param teamMemberId   The ID of the team member to retrieve.
     * @return Response from the API call
     */
    retrieveTeamMember(teamMemberId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveTeamMemberResponse>>;
    /**
     * Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
     * Learn about [Troubleshooting the Team API](https://developer.squareup.
     * com/docs/team/troubleshooting#update-a-team-member).
     *
     * @param teamMemberId   The ID of the team member to update.
     * @param body           An object containing the fields to POST for the request.
     *                                                         See the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateTeamMember(teamMemberId: string, body: UpdateTeamMemberRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateTeamMemberResponse>>;
    /**
     * Retrieves a `WageSetting` object for a team member specified
     * by `TeamMember.id`. For more information, see
     * [Troubleshooting the Team API](https://developer.squareup.
     * com/docs/team/troubleshooting#retrievewagesetting).
     *
     * Square recommends using [RetrieveTeamMember]($e/Team/RetrieveTeamMember) or
     * [SearchTeamMembers]($e/Team/SearchTeamMembers)
     * to get this information directly from the `TeamMember.wage_setting` field.
     *
     * @param teamMemberId   The ID of the team member for which to retrieve the wage setting.
     * @return Response from the API call
     */
    retrieveWageSetting(teamMemberId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveWageSettingResponse>>;
    /**
     * Creates or updates a `WageSetting` object. The object is created if a
     * `WageSetting` with the specified `team_member_id` doesn't exist. Otherwise,
     * it fully replaces the `WageSetting` object for the team member.
     * The `WageSetting` is returned on a successful update. For more information, see
     * [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-
     * update-a-wage-setting).
     *
     * Square recommends using [CreateTeamMember]($e/Team/CreateTeamMember) or
     * [UpdateTeamMember]($e/Team/UpdateTeamMember)
     * to manage the `TeamMember.wage_setting` field directly.
     *
     * @param teamMemberId   The ID of the team member for which to update the
     *                                                          `WageSetting` object.
     * @param body           An object containing the fields to POST for the request.
     *                                                          See the corresponding object definition for field
     *                                                          details.
     * @return Response from the API call
     */
    updateWageSetting(teamMemberId: string, body: UpdateWageSettingRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateWageSettingResponse>>;
}
